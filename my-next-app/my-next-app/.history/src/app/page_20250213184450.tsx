"use client";


import { useRouter } from "next/navigation";
import { Button, Container, Box, Typography } from "@mui/material";

export default function SignInPage() {
  const router = useRouter();


  const handleSubmit = () => {
    
    router.push("/dashboard");
      // Redirect to dashboard
    
  };

  return (
    <Container maxWidth="xs">
      <Box textAlign="center" my={4}>
        <Typography variant="h5">Sign In</Typography>
      </Box>
      <form onSubmit={handleSubmit}>
    
        <Box mt={2}>
          <Button onClick={ handleSubmit}>
            Sign In
          </Button>
        </Box>
      </form>
    </Container>
  );
}
