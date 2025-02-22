"use client";
// import LoginButton from "@/components/LoginButton";
import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";


function HeaderProfileBtn() {
  return (
    <>
      <UserButton>
       
      </UserButton>

      <SignedOut>
        {/* <LoginButton /> */}
        <SignInButton />
      </SignedOut>
    </>
  );
}
export default HeaderProfileBtn;
