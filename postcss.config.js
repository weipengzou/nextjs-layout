/*
 * @Author: ZWP
 * @LastEditors: ZWP
 * @Description: 
 */
module.exports = {
    plugins: [
        "postcss-flexbugs-fixes",
        [
            "postcss-preset-env",
            {
                "autoprefixer": {
                    "flexbox": "no-2009"
                },
                "stage": 3,
                "features": {
                    "custom-properties": false
                }
            }
        ],
        ['postcss-pxtorem', {
            rootValue: 1920 / 10,
            unitPrecision: 5,
            propList: ["*"],
            selectorBlackList: [/^\.html/], //排除html样式
            replace: true,
            mediaQuery: false,
            minPixelValue: 0
        }]
    ]
}