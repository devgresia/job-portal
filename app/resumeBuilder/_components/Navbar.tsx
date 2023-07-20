import Link from "next/link";
import { Box, Text, Button } from "@mantine/core";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

function Navbar() {
  const { classes } = useStyles();

  return (
    <Box component={"header"} className={classes.flex}>
      <Text size={"xl"}>
        <Text
          sx={{ fontWeight: "bold" }}
          color={"violet"}
          inherit
          component={"span"}
        >
          Grasia{" "}
        </Text>
        Resume Builder
      </Text>
      <Link href="/resumeBuilder/createResume" passHref>
        <Button component="a" color={"violet"} variant={"outline"}>
          Create Resume
        </Button>
      </Link>
    </Box>
  );
}

export default Navbar;
