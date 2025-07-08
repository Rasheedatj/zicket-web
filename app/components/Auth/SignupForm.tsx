"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormContainer } from "./FormContainer";
import { FormInput } from "./FormInput";
import { FormButton } from "./FormButton";

export function SignupForm() {
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
  });
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    router.push("/verify");
  };

  return (
    <FormContainer
      title="Create New Organizer Profile"
      description="Zicket gives you full control and your guests full privacy."
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          type="text"
          label="Enter Display Name (Public)"
          placeholder="e.g. Afrowave Labs"
          value={formData.displayName}
          onChange={(e) =>
            setFormData({ ...formData, displayName: e.target.value })
          }
          required
        />

        <FormInput
          type="email"
          label="Contact Email (Platform notifications only)"
          placeholder="e.g. you@email.com"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          required
          minLength={8}
        />

        <FormButton
          type="submit"
          variant="primary"
          icon="/svg/security-password.svg"
          iconSize={30}
        >
          Verify ZicketMail
        </FormButton>

        <FormButton
          type="button"
          variant="secondary"
          onClick={() => router.back()}
        >
          Go Back
        </FormButton>
      </form>
    </FormContainer>
  );
}
