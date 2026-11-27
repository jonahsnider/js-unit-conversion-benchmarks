# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 27 Nov 2026 11:14:44 GMT with Node.js v26.13.1 (V8 v14.6.202.34-node.40) on runnervm0hi8g (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `111`ns (222%)        | `120`ns (240%)                 | `9,009,009`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (260%)        | `140`ns (280%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `160`ns (320%)        | `161`ns (322%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `220`ns (440%)        | `230`ns (460%)                 | `4,545,455`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `370`ns (740%)        | `381`ns (762%)                 | `2,702,703`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `481`ns (962%)        | `491`ns (982%)                 | `2,079,002`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `530`ns (1,060%)      | `541`ns (1,082%)               | `1,886,792`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,033`ns (2,066%)    | `1,052`ns (2,104%)             | `968,054`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,883`ns (3,766%)    | `1,913`ns (3,826%)             | `531,067`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `652`ns (100%)        | `721`ns (111%)                 | `1,533,742`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,553`ns (238%)      | `1,723`ns (264%)               | `643,915`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `24,415`ns (3,745%)   | `25,727`ns (3,946%)            | `40,958`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `70`ns (100%)         | `70`ns (100%)                  | `14,285,714`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (171%)        | `121`ns (173%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (186%)        | `140`ns (200%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `160`ns (229%)        | `161`ns (230%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `201`ns (287%)        | `211`ns (301%)                 | `4,975,124`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `491`ns (701%)        | `501`ns (716%)                 | `2,036,660`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,004`ns (2,863%)    | `2,034`ns (2,906%)             | `499,002`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `121`ns (242%)        | `130`ns (260%)                 | `8,264,463`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `141`ns (282%)        | `150`ns (300%)                 | `7,092,199`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `150`ns (300%)        | `160`ns (320%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (1,002%)      | `532`ns (1,064%)               | `1,996,008`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,182`ns (2,364%)    | `1,192`ns (2,384%)             | `846,024`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,795`ns (5,590%)    | `2,845`ns (5,690%)             | `357,782`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `221`ns (100%)        | `230`ns (104%)                 | `4,524,887`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `250`ns (113%)        | `251`ns (114%)                 | `4,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `311`ns (141%)        | `330`ns (149%)                 | `3,215,434`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `110`ns (220%)        | `190`ns (380%)                 | `9,090,909`/sec       |

<!-- endblock(results) -->
