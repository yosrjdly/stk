"use client";

import { useRouter } from "next/navigation";
import { Button, Container, Box } from "@mui/material";

export default function SignInPage() {
  const router = useRouter();

  return (
    <Container maxWidth="xs">
      <Box textAlign="center" my={4}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => router.push("/(dashboard")}
        >
          Go to Dashboard
        </Button>
      </Box>
    </Container>
  );
}
