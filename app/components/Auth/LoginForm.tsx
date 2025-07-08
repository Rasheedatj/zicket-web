"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormContainer } from "./FormContainer";
import { FormInput } from "./FormInput";
import { FormButton } from "./FormButton";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sending magic link to:", email);    
    // router.push("/verify-magic-link");
  };

  return (
    <FormContainer
      title="Login with zkEmail"
      description="Enter your email to receive a secure, one-time login."
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          type="email"
          placeholder="e.g. you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          minLength={8}
        />

        <FormButton
          type="submit"
          variant="primary"
          icon="/svg/security-password.svg"
        >
          Send Magic Link
        </FormButton>

        <FormButton
          type="button"
          variant="secondary"
          onClick={() => router.push("/")}
        >
          Go Back
        </FormButton>
      </form>
    </FormContainer>
  );
}
