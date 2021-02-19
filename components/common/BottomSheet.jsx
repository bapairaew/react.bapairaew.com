import dynamic from "next/dynamic";
import { Box, Card, useThemeUI } from "theme-ui";

const SwipeableBottomSheet = dynamic(
  () => import("react-swipeable-bottom-sheet"),
  { ssr: false }
);

const BottomSheetIndicator = () => (
  <Box
    sx={{
      height: 5,
      width: 60,
      borderRadius: "full",
      backgroundColor: "muted",
      mx: "auto",
    }}
  />
);

export default function BottomSheet({ children, ...props }) {
  const { theme } = useThemeUI();
  return (
    <SwipeableBottomSheet
      style={{ zIndex: theme.zIndices[50] }}
      bodyStyle={{ backgroundColor: "transparent" }}
      overlayStyle={{ backgroundColor: theme.colors.background }}
      {...props}
    >
      <Card
        variant="compact"
        m={0}
        pt={3}
        sx={{ borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }}
      >
        <BottomSheetIndicator />
        <Box p={4}>{children}</Box>
      </Card>
    </SwipeableBottomSheet>
  );
}
