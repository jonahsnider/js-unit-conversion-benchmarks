# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 26 Nov 2026 11:18:35 GMT with Node.js v26.13.1 (V8 v14.6.202.34-node.40) on runnervm0hi8g (Linux-x64 INTEL(R) XEON(R) PLATINUM 8573C)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `46`ns (100%)         | `48`ns (104%)                  | `21,739,130`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `114`ns (248%)        | `133`ns (289%)                 | `8,771,930`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `122`ns (265%)        | `127`ns (276%)                 | `8,196,721`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `153`ns (333%)        | `159`ns (346%)                 | `6,535,948`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `206`ns (448%)        | `232`ns (504%)                 | `4,854,369`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `333`ns (724%)        | `345`ns (750%)                 | `3,003,003`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `446`ns (970%)        | `485`ns (1,054%)               | `2,242,152`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `463`ns (1,007%)      | `480`ns (1,043%)               | `2,159,827`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `983`ns (2,137%)      | `1,071`ns (2,328%)             | `1,017,294`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,585`ns (3,446%)    | `1,640`ns (3,565%)             | `630,915`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `375`ns (100%)        | `394`ns (105%)                 | `2,666,667`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,002`ns (267%)      | `1,107`ns (295%)               | `998,004`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `18,239`ns (4,864%)   | `18,655`ns (4,975%)            | `54,828`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `70`ns (100%)         | `73`ns (104%)                  | `14,285,714`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `118`ns (169%)        | `139`ns (199%)                 | `8,474,576`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `121`ns (173%)        | `128`ns (183%)                 | `8,264,463`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `129`ns (184%)        | `137`ns (196%)                 | `7,751,938`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `193`ns (276%)        | `219`ns (313%)                 | `5,181,347`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `482`ns (689%)        | `501`ns (716%)                 | `2,074,689`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,691`ns (2,416%)    | `1,750`ns (2,500%)             | `591,366`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `51`ns (100%)         | `53`ns (104%)                  | `19,607,843`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `129`ns (253%)        | `136`ns (267%)                 | `7,751,938`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `139`ns (273%)        | `149`ns (292%)                 | `7,194,245`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `142`ns (278%)        | `149`ns (292%)                 | `7,042,254`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `486`ns (953%)        | `571`ns (1,120%)               | `2,057,613`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,199`ns (2,351%)    | `1,230`ns (2,412%)             | `834,028`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,409`ns (4,724%)    | `2,481`ns (4,865%)             | `415,110`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `167`ns (100%)        | `172`ns (103%)                 | `5,988,024`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `197`ns (118%)        | `202`ns (121%)                 | `5,076,142`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `244`ns (146%)        | `252`ns (151%)                 | `4,098,361`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `48`ns (100%)         | `51`ns (106%)                  | `20,833,333`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `116`ns (242%)        | `181`ns (377%)                 | `8,620,690`/sec       |

<!-- endblock(results) -->
