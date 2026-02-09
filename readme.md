# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 09 Feb 2026 18:29:35 GMT with Node.js v24.13.0 (V8 v13.6.233.17-node.37) on runnervmwffz4 (Linux-x64 Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `39`ns (100%)         | `40`ns (103%)                  | `25,641,026`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `114`ns (292%)        | `116`ns (297%)                 | `8,771,930`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `125`ns (321%)        | `127`ns (326%)                 | `8,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (333%)        | `132`ns (338%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `201`ns (515%)        | `203`ns (521%)                 | `4,975,124`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `347`ns (890%)        | `352`ns (903%)                 | `2,881,844`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `487`ns (1,249%)      | `493`ns (1,264%)               | `2,053,388`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `659`ns (1,690%)      | `669`ns (1,715%)               | `1,517,451`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,005`ns (2,577%)    | `1,019`ns (2,613%)             | `995,025`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,702`ns (4,364%)    | `1,722`ns (4,415%)             | `587,544`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `383`ns (100%)        | `406`ns (106%)                 | `2,610,966`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,455`ns (380%)      | `1,531`ns (400%)               | `687,285`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `23,567`ns (6,153%)   | `23,999`ns (6,266%)            | `42,432`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `59`ns (100%)         | `60`ns (102%)                  | `16,949,153`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `117`ns (198%)        | `120`ns (203%)                 | `8,547,009`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `126`ns (214%)        | `130`ns (220%)                 | `7,936,508`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `127`ns (215%)        | `130`ns (220%)                 | `7,874,016`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `204`ns (346%)        | `213`ns (361%)                 | `4,901,961`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `630`ns (1,068%)      | `643`ns (1,090%)               | `1,587,302`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,877`ns (3,181%)    | `1,916`ns (3,247%)             | `532,765`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `41`ns (102%)                  | `25,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `104`ns (260%)        | `105`ns (263%)                 | `9,615,385`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `131`ns (328%)        | `133`ns (333%)                 | `7,633,588`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `133`ns (333%)        | `136`ns (340%)                 | `7,518,797`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `516`ns (1,290%)      | `528`ns (1,320%)               | `1,937,984`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,533`ns (3,833%)    | `1,553`ns (3,883%)             | `652,316`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,483`ns (6,208%)    | `2,523`ns (6,308%)             | `402,739`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `183`ns (100%)        | `185`ns (101%)                 | `5,464,481`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `211`ns (115%)        | `213`ns (116%)                 | `4,739,336`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `271`ns (148%)        | `274`ns (150%)                 | `3,690,037`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `44`ns (100%)         | `45`ns (102%)                  | `22,727,273`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `111`ns (252%)        | `114`ns (259%)                 | `9,009,009`/sec       |

<!-- endblock(results) -->
