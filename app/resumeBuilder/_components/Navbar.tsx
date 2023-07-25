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
          color={"#228BE6"}
          inherit
          component={"span"}
        >
          Grasia{" "}
        </Text>
        Resume Builder
      </Text>
      <Link href="/resumeBuilder/createResume" passHref>
        <button
          color="#228BE6"
          className="flex spa justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
        >
          Create Resume
        </button>
      </Link>
    </Box>
  );
}

export default Navbar;
