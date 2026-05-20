import { View, Text, StyleSheet } from "react-native";

type Props = {
  card: any;
};

export default function CardDetails({ card }: Props) {
  if (!card) {
    return (
      <View style={styles.container}>
        <Text>Card not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{card.name}</Text>
      <Text style={styles.description}>{card.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});