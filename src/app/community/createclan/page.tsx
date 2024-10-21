"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Users, Image as ImageIcon, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function CreateClan() {
  const [step, setStep] = useState(1);
  const [clanName, setClanName] = useState("");
  const [clanDescription, setClanDescription] = useState("");
  const [clanTags, setClanTags] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [clanImage, setClanImage] = useState<string | null>(null);
  const router = useRouter();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setClanImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({ clanName, clanDescription, clanTags, isPrivate, clanImage });
    // After successful creation, redirect to the new clan page
    console.log(step);
    if (step === 4 || step === 5) {
      router.push("/community/new-clan-id");
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Name your clan</h2>
            <p className="text-gray-400">
              Choose a name that represents your clan&apos;s identity and
              purpose.
            </p>
            <Input
              value={clanName}
              onChange={(e) => setClanName(e.target.value)}
              placeholder="Enter clan name"
              className="border-gray-700 bg-[#1c2732] text-white"
            />
            <div className="flex justify-end">
              <Button
                onClick={() => setStep(2)}
                disabled={!clanName.trim()}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Continue
              </Button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Describe your clan</h2>
            <p className="text-gray-400">
              Tell potential members what your clan is all about.
            </p>
            <Textarea
              value={clanDescription}
              onChange={(e) => setClanDescription(e.target.value)}
              placeholder="Enter clan description"
              rows={4}
              className="border-gray-700 bg-[#1c2732] text-white"
            />
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setStep(1)}
                className="border-gray-700 text-gray-300 hover:bg-[#1c2732] hover:text-white"
              >
                Back
              </Button>
              <Button
                onClick={() => setStep(3)}
                disabled={!clanDescription.trim()}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Continue
              </Button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Add some tags</h2>
            <p className="text-gray-400">
              Help others discover your clan with relevant tags.
            </p>
            <Input
              value={clanTags}
              onChange={(e) => setClanTags(e.target.value)}
              placeholder="Enter tags (comma-separated)"
              className="border-gray-700 bg-[#1c2732] text-white"
            />
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setStep(2)}
                className="border-gray-700 text-gray-300 hover:bg-[#1c2732] hover:text-white"
              >
                Back
              </Button>
              <Button
                onClick={() => setStep(4)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Continue
              </Button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Customize your clan</h2>
            <p className="text-gray-400">
              Upload an image and set privacy settings for your clan.
            </p>
            <div className="flex items-center space-x-4">
              <Label htmlFor="clanImage" className="cursor-pointer">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#1c2732]">
                  {clanImage ? (
                    <Image
                      src={clanImage}
                      alt="Clan image"
                      width={96}
                      height={96}
                      className="rounded-full"
                    />
                  ) : (
                    <ImageIcon className="h-8 w-8 text-gray-400" />
                  )}
                </div>
              </Label>
              <Input
                id="clanImage"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <div>
                <p className="font-semibold">Clan Image</p>
                <p className="text-sm text-gray-400">
                  Upload a logo or banner for your clan
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Switch
                id="private-mode"
                checked={isPrivate}
                onCheckedChange={setIsPrivate}
              />
              <div>
                <Label htmlFor="private-mode" className="font-semibold">
                  Private Clan
                </Label>
                <p className="text-sm text-gray-400">
                  Only approved members can join and view content
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={() => setStep(3)}
                className="border-gray-700 text-gray-300 hover:bg-[#1c2732] hover:text-white"
              >
                Back
              </Button>
              <Button
                onClick={(e) => {
                  setStep(5);
                  handleSubmit(e);
                }}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Create Clan
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-8 text-gray-300 hover:text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Community
        </Button>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-gray-800 bg-[#15202b] shadow-lg">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {renderStep()}
                </form>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-gray-800 bg-[#15202b] shadow-lg">
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-bold">Clan Preview</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1c2732]">
                      {clanImage ? (
                        <Image
                          src={clanImage}
                          alt="Clan image"
                          width={64}
                          height={64}
                          className="rounded-full"
                        />
                      ) : (
                        <Users className="h-8 w-8 text-gray-400" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">
                        {clanName || "Your Clan Name"}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {isPrivate ? "Private Clan" : "Public Clan"}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    {clanDescription ||
                      "Your clan description will appear here."}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {clanTags.split(",").map((tag, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-[#1c2732] px-2 py-1 text-sm text-gray-300"
                      >
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                  <div className="rounded-lg bg-[#1c2732] p-4">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Users className="h-5 w-5" />
                      <span>0 members</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
