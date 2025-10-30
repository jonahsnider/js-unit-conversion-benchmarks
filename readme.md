# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 30 Oct 2025 18:02:26 GMT with Node.js v24.11.0 (V8 v13.6.233.10-node.28) on runnervmwhb2z (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `50`ns (125%)                  | `25,000,000`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `100`ns (250%)        | `100`ns (250%)                 | `10,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (350%)        | `150`ns (375%)                 | `7,142,857`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `150`ns (375%)        | `150`ns (375%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `210`ns (525%)        | `211`ns (528%)                 | `4,761,905`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `351`ns (878%)        | `361`ns (903%)                 | `2,849,003`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `521`ns (1,303%)      | `531`ns (1,328%)               | `1,919,386`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `631`ns (1,578%)      | `641`ns (1,602%)               | `1,584,786`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,072`ns (2,680%)    | `1,092`ns (2,730%)             | `932,836`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,773`ns (4,433%)    | `1,803`ns (4,508%)             | `564,016`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `552`ns (100%)        | `621`ns (113%)                 | `1,811,594`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,714`ns (311%)      | `1,824`ns (330%)               | `583,431`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `26,591`ns (4,817%)   | `28,015`ns (5,075%)            | `37,607`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (200%)        | `130`ns (217%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (217%)        | `140`ns (233%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (233%)        | `141`ns (235%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `210`ns (350%)        | `221`ns (368%)                 | `4,761,905`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `621`ns (1,035%)      | `631`ns (1,052%)               | `1,610,306`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,964`ns (3,273%)    | `2,013`ns (3,355%)             | `509,165`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `49`ns (123%)                  | `25,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `100`ns (250%)        | `100`ns (250%)                 | `10,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (275%)        | `120`ns (300%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `141`ns (353%)        | `150`ns (375%)                 | `7,092,199`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `471`ns (1,178%)      | `481`ns (1,203%)               | `2,123,142`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,532`ns (3,830%)    | `1,542`ns (3,855%)             | `652,742`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,645`ns (6,613%)    | `2,725`ns (6,813%)             | `378,072`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `210`ns (100%)        | `220`ns (105%)                 | `4,761,905`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `221`ns (105%)        | `230`ns (110%)                 | `4,524,887`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `311`ns (148%)        | `321`ns (153%)                 | `3,215,434`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `49`ns (100%)         | `50`ns (102%)                  | `20,408,163`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `90`ns (184%)         | `90`ns (184%)                  | `11,111,111`/sec      |

<!-- endblock(results) -->
