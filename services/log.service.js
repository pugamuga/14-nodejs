import chalk from "chalk";
import dedent from "dedent-js";

export const printError = (err) => {
    console.log(`${chalk.bgRed(" Error: ")} ${err}`)
}

export const printSuccess = (data) => {
    console.log(`${chalk.bgGreen(" Success: ")} ${data}`)
}


export const printHelp = () => {
    console.log(dedent`
    ${chalk.bgCyan(" HELP ")}
    Without parameters - weather
    -s [CITY] for choose city
    -h for help
    -t [API_KEY] for saving api key
    `)
}