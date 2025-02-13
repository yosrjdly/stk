"use client";


import { useRouter } from "next/navigation";
import { Button, Container, Box, Typography } from "@mui/material";

export default function SignInPage() {
  const router = useRouter();

const test ()=>{
  router.push('/(dashboard)')
}

  return (
    
    
        <Box mt={2}>
          <Button onClick={ test}>
            Sign In
          </Button>
        </Box>
  
  );
}
