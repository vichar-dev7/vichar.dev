'use client'
import { ThemeProvider } from "@/components/Theme-Provider";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { RecoilRoot } from 'recoil';


export const Providers=({children}:{children:ReactNode})=>{
return(
<SessionProvider>
<ThemeProvider attribute="class" defaultTheme="system" enableSystem >
            <RecoilRoot>
        {children}

        </RecoilRoot>

    </ThemeProvider>
</SessionProvider>
)
}