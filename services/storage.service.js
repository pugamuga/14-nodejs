import OS from "os"
import {join} from "path"

const filePath = join(OS.homedir(), "weather-data.json")

export const saveKeyValue = (key, value) => {
    console.log(filePath)
}