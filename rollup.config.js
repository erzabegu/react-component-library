import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from 'rollup-plugin-postcss';
import copy from "rollup-plugin-copy";
import scss from "rollup-plugin-scss";


const packageJson = require("./package.json");

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],

        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({tsconfig: "./tsconfig.json"}),
            postcss({
                extract: false,
                modules: true,
                use: ['sass'],
            }),
            copy({
                targets: [
                    {
                        src: "src/common/mixins.scss",
                        dest: "dist",
                        rename: "mixins.scss"
                    },
                    {
                        src: "src/common/dark.scss",
                        dest: "dist",
                        rename: "dark.scss"
                    },
                    {
                        src: "src/common/variables.scss",
                        dest: "dist",
                        rename: "variables.scss"
                    },
                    {
                        src: "src/common/styles.scss",
                        dest: "dist",
                        rename: "styles.scss"
                    },
                ]
            })
        ],
    },
    {
        input: "src/hooks/index.ts",
        output: [
            {
                file: "dist/hooks.js",
                format: "cjs",
                sourcemap: true
            },
            {
                file: "dist/hooks.esm.js",
                format: "esm",
                sourcemap: true
            }
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({tsconfig: "./tsconfig.json"}),
            postcss({
                extract: false,
                modules: true,
                use: ['sass'],
            }),
            scss({
                output: "dist/css/style.css",
                failOnError: true,
            }),
            copy({
                targets: [
                    {
                        src: "src/common/mixins.scss",
                        dest: "dist",
                        rename: "mixins.scss"
                    },
                    {
                        src: "src/common/dark.scss",
                        dest: "dist",
                        rename: "dark.scss"
                    },
                    {
                        src: "src/common/variables.scss",
                        dest: "dist",
                        rename: "variables.scss"
                    },
                    {
                        src: "src/common/styles.scss",
                        dest: "dist",
                        rename: "styles.scss"
                    },
                ]
            })
        ],
    },
    {
        input: "src/icons/index.ts",
        output: [
            {
                file: "dist/icons.js",
                format: "cjs",
                sourcemap: true
            },
            {
                file: "dist/icons.esm.js",
                format: "esm",
                sourcemap: true
            }
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({tsconfig: "./tsconfig.json"}),
            postcss({
                extract: false,
                modules: true,
                use: ['sass'],
            }),
            scss({
                output: "dist/css/style.css",
                failOnError: true,
            }),
            copy({
                targets: [
                    {
                        src: "src/common/mixins.scss",
                        dest: "dist",
                        rename: "mixins.scss"
                    },
                    {
                        src: "src/common/dark.scss",
                        dest: "dist",
                        rename: "dark.scss"
                    },
                    {
                        src: "src/common/variables.scss",
                        dest: "dist",
                        rename: "variables.scss"
                    },
                    {
                        src: "src/common/styles.scss",
                        dest: "dist",
                        rename: "styles.scss"
                    },
                ]
            })
        ],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{file: "dist/index.d.ts", format: "esm"}],
        plugins: [dts(), scss({
            output: "dist/css/style.css",
            failOnError: true,
        }),],

    },
];