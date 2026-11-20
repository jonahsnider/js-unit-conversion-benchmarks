# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 20 Nov 2026 10:19:26 GMT with Node.js v26.13.1 (V8 v14.6.202.34-node.40) on runnervm0hi8g (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (240%)        | `121`ns (242%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `131`ns (262%)        | `140`ns (280%)                 | `7,633,588`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `160`ns (320%)        | `161`ns (322%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `211`ns (422%)        | `221`ns (442%)                 | `4,739,336`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `361`ns (722%)        | `371`ns (742%)                 | `2,770,083`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `481`ns (962%)        | `490`ns (980%)                 | `2,079,002`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `530`ns (1,060%)      | `541`ns (1,082%)               | `1,886,792`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,031`ns (2,062%)    | `1,052`ns (2,104%)             | `969,932`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,854`ns (3,708%)    | `1,884`ns (3,768%)             | `539,374`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `571`ns (100%)        | `651`ns (114%)                 | `1,751,313`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,563`ns (274%)      | `1,704`ns (298%)               | `639,795`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `23,967`ns (4,197%)   | `25,199`ns (4,413%)            | `41,724`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `70`ns (100%)         | `70`ns (100%)                  | `14,285,714`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (171%)        | `130`ns (186%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `131`ns (187%)        | `141`ns (201%)                 | `7,633,588`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `160`ns (229%)        | `161`ns (230%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `201`ns (287%)        | `211`ns (301%)                 | `4,975,124`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `501`ns (716%)        | `512`ns (731%)                 | `1,996,008`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,984`ns (2,834%)    | `2,014`ns (2,877%)             | `504,032`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `49`ns (100%)         | `50`ns (102%)                  | `20,408,163`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (245%)        | `130`ns (265%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (286%)        | `150`ns (306%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `150`ns (306%)        | `160`ns (327%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `511`ns (1,043%)      | `531`ns (1,084%)               | `1,956,947`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,182`ns (2,412%)    | `1,193`ns (2,435%)             | `846,024`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,775`ns (5,663%)    | `2,815`ns (5,745%)             | `360,360`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `221`ns (100%)        | `231`ns (105%)                 | `4,524,887`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `250`ns (113%)        | `260`ns (118%)                 | `4,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `321`ns (145%)        | `331`ns (150%)                 | `3,115,265`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `51`ns (102%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `111`ns (222%)        | `201`ns (402%)                 | `9,009,009`/sec       |

<!-- endblock(results) -->
