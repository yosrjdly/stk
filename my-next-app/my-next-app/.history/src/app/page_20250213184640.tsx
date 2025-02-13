"use client";


import { useRouter } from "next/navigation";
import { Button, Container, Box, Typography } from "@mui/material";

export default function SignInPage() {
  const router = useRouter();

const test ()=>{
  router.push('/(')
}

  return (
    
    
        <Box mt={2}>
          <Button onClick={ handleSubmit}>
            Sign In
          </Button>
        </Box>
  
  );
}
