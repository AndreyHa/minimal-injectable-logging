import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';


export default [
    {
        input: 'src/logging.ts',
        output: [
            {
                file: 'dist/index.cjs.js',
                format: 'cjs',
            },
            {
                file: 'dist/index.esm.js',
                format: 'es',
            },
        ],
        plugins: [
            typescript({ tsconfig: './tsconfig.json' }),
            terser(),
        ],
    },
];
