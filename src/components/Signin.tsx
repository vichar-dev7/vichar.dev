'use client'
import { signIn } from "next-auth/react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { motion } from "framer-motion"; 
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (provider: string) => {
    setLoading(true);
    setError("");
    try {
      await signIn(provider);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      redirect: false,
      name,
      email,
      password,
    });

    if (result?.error) {
      setError(result.error);
    } else {
      window.location.href = "/";
    }

    setLoading(false);
  };

  return (
    <div className="flex min-h-screen bg-black">
      {/* Left Side: Image */}
      <div className="w-1/2 hidden md:flex items-center justify-center relative">
        <Image
          src="/coder.png" // Replace with your image path
          alt="Login Illustration"
          width={350}
          height={350}
          className="h-auto w-auto object-contain" 
        />
      </div>

      {/* Right Side: Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <motion.div
          className="w-full max-w-lg p-8 rounded-lg shadow-lg bg-primary/5 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-primary/5 text-white p-6 max-w-lg mx-auto shadow-lg rounded-lg">
            <div className="flex flex-col text-center space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                Welcome to{' '}
                <span className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text pr-1 font-black text-transparent">
                  Vichar.Dev
                </span>
              </h2>
              <p className="text-lg font-medium text-gray-400 md:text-xl lg:text-2xl">
                Log in to your account
              </p>
            </div>

            <CardContent className="mt-6 space-y-6">
              {/* Social Login Buttons */}
              <div className="flex flex-col space-y-4">
                <Button
                  variant="outline"
                  onClick={() => handleSignIn("github")}
                  className="flex items-center justify-center space-x-2 bg-gray-700 hover:bg-gray-600 transition-all text-white border-none shadow-md hover:scale-105 transform-gpu"
                >
                  <FaGithub className="text-xl" />
                  <span className="text-lg">Sign in with GitHub</span>
                </Button>

                <Button
                  variant="outline"
                  onClick={() => handleSignIn("google")}
                  className="flex items-center justify-center space-x-2 bg-gray-700 hover:bg-gray-600 transition-all text-white border-none shadow-md hover:scale-105 transform-gpu"
                >
                  <FcGoogle className="text-xl" />
                  <span className="text-lg">Sign in with Google</span>
                </Button>
              </div>

              <div className="my-6 relative">
                <span className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 px-4 bg-black text-gray-500 text-sm">
                  Or sign in with your email
                </span>
                <div className="border-t border-gray-600"></div>
              </div>

              {/* Sign-in Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <Button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105 transform-gpu duration-200 shadow-lg"
                >
                  {loading ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <motion.div
            className="mt-6 text-center text-sm text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
