"use client";
import { fetchLogin } from "@/actions/fetchLogin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthContext, AuthContextType } from "@/context/AuthContext";
import { RefreshCw } from "lucide-react";
import Form from "next/form";
import { useRouter } from "next/navigation";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

export const LoginForm = () => {
  const { isAuthenticated, login } = useContext(AuthContext) as AuthContextType;
  const router = useRouter();
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleAction = useCallback(
    async (e: FormData) => {
      setLoading(true);
      const res = await fetchLogin(e);
      setLoading(false);
      if (res.error) return setError(res.error);
      if (res.token) login(res.token);
    },
    [login]
  );

  const handleSubmit = useCallback(() => {
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    handleAction(formData);
  }, [handleAction]);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/home");
    }
  }, [isAuthenticated, router]);

  return (
    <Form
      ref={formRef}
      action={handleAction}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      onChange={() => {
        if (error) setError(null);
      }}
      className="w-full flex flex-col max-w-[300px] m-auto mt-8 md:mt-40 p-4 bg-white border rounded shadow-xl shadow-gray-300"
    >
      <h1 className="text-2xl font-bold mt-2"> SIGN IN</h1>
      <p className="text-xs text-gray-600">
        Stay updated on your favorite games.
      </p>

      <Input
        type="email"
        placeholder="Email..."
        className="rounded shadow mt-4"
        name="email"
        required
      />

      <Input
        type="password"
        name="password"
        placeholder="Password..."
        className="rounded shadow my-4"
        required
      />
      {error && (
        <div className="border-red-600 text-sm mb-2 border bg-red-200 text-red-800 rounded px-2 py-1 font-medium">
          {error}
        </div>
      )}
      <Button type="submit" disabled={loading} className="!w-full mb-2">
        {loading ? (
          <RefreshCw className=" animate-spin" size={20} />
        ) : (
          "Sign In"
        )}
      </Button>
      <Button type="button" className="!w-full mb-2" variant="secondary">
        Go to sign Up
      </Button>
    </Form>
  );
};
