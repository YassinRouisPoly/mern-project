import LoggerBuilder from "@yassinrouis/logger"

const Logger = new LoggerBuilder({
    level: LoggerBuilder.DEBUG,
    themeOverride: {
        debug: {
            level: LoggerBuilder.DEBUG,
            label: "DEBUG",
            style: {
                icon: {fore: "gray", back: undefined, style: undefined},
                time: {fore: "grey", back: "black", style: undefined},
                type: {fore: "grey", back: undefined, style: undefined},
                text: {fore: "grey", back: undefined, style: undefined}
            },
        }
    }
})

export default Logger;