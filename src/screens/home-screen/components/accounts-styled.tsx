import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useTheme } from "@/common/theme";
import { contentPadding } from "@/common/screen-util";
import { CommonLine } from "@/common/common-line";
import { i18n } from "@/translations";
import { ColorTheme } from "@/types/theme-props";

const getStyles = (theme: ColorTheme) =>
  StyleSheet.create({
    text: {
      fontSize: 20,
      color: theme.text01,
    },
    rowContainer: {
      flexDirection: "row",
      height: 50,
      alignItems: "center",
      paddingHorizontal: contentPadding,
    },
    circle: {
      height: 14,
      width: 14,
      borderRadius: 7,
      marginRight: contentPadding,
    },
  });

export function AccountsRow({
  title,
  value,
  circleColor,
}: {
  title: string;
  value: string;
  circleColor: string;
}): JSX.Element {
  const theme = useTheme().colorTheme;
  const styles = getStyles(theme);
  return (
    <View style={styles.rowContainer}>
      <View style={[styles.circle, { backgroundColor: circleColor }]} />
      <Text style={styles.text}>{title}</Text>
      <View style={{ flex: 1 }} />
      <Text style={styles.text}>{value}</Text>
    </View>
  );
}

export function AccountsStyled({
  assets,
  liabilities,
}: {
  assets: string;
  liabilities: string;
}): JSX.Element {
  return (
    <View>
      <CommonLine />
      <AccountsRow
        title={i18n.t("assets")}
        value={assets}
        circleColor="#07A35A"
      />
      <CommonLine />
      <AccountsRow
        title={i18n.t("liabilities")}
        value={liabilities}
        circleColor="#5AAAFA"
      />
      <CommonLine />
    </View>
  );
}
