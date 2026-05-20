
import AsyncStorage from "@react-native-async-storage/async-storage"
import { SavedReading } from "@/types/reading"

const STORAGE_KEY = "tarot_readings"

export async function getReadings(): Promise<SavedReading[]> {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.error("Error loading readings:", error)
    return []
  }
}

export async function saveReading(reading: SavedReading): Promise<void> {
  try {
    console.log("📀 Saving reading:", reading)

    const existingReadings = await getReadings()
    const updatedReadings = [reading, ...existingReadings]

    await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedReadings)
    )

    console.log("✅ Reading saved successfully!")
  } catch (error) {
    console.error("❌ Error saving reading:", error)
  }
}

export async function deleteReading(id: string): Promise<void> {
  try {
    const existingReadings = await getReadings();
    const updatedReadings = existingReadings.filter(r => r.id !== id);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedReadings));
    console.log("✅ Deleted reading permanently:", id);
  } catch (error) {
    console.error("❌ Error deleting reading:", error);
  }
}