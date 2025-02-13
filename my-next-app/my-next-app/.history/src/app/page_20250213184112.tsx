"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Container, Box, Typography } from "@mui/material";

export default function SignInPage() {
  const router = useRouter();


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   
      router.push("/dashboard"); // Redirect to dashboard
    }
  };

  return (
    <Container maxWidth="xs">
      <Box textAlign="center" my={4}>
        <Typography variant="h5">Sign In</Typography>
      </Box>
      <form onSubmit={handleSubmit}>
       
        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign In
          </Button>
        </Box>
      </form>
    </Container>
  );
}
