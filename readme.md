# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 04 Sep 2026 02:14:22 GMT with Node.js v26.8.1 (V8 v14.6.202.34-node.28) on runnervmgx7h7 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `41`ns (100%)         | `50`ns (122%)                  | `24,390,244`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (268%)        | `111`ns (271%)                 | `9,090,909`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (293%)        | `120`ns (293%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (317%)        | `130`ns (317%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `200`ns (488%)        | `210`ns (512%)                 | `5,000,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `371`ns (905%)        | `381`ns (929%)                 | `2,695,418`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `461`ns (1,124%)      | `471`ns (1,149%)               | `2,169,197`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `511`ns (1,246%)      | `521`ns (1,271%)               | `1,956,947`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,012`ns (2,468%)    | `1,022`ns (2,493%)             | `988,142`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,884`ns (4,595%)    | `1,913`ns (4,666%)             | `530,786`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `571`ns (100%)        | `632`ns (111%)                 | `1,751,313`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,533`ns (268%)      | `1,663`ns (291%)               | `652,316`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `24,527`ns (4,295%)   | `25,519`ns (4,469%)            | `40,771`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (183%)        | `111`ns (185%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `121`ns (202%)        | `130`ns (217%)                 | `8,264,463`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (217%)        | `131`ns (218%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `200`ns (333%)        | `210`ns (350%)                 | `5,000,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `481`ns (802%)        | `491`ns (818%)                 | `2,079,002`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,963`ns (3,272%)    | `1,984`ns (3,307%)             | `509,424`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `41`ns (100%)         | `50`ns (122%)                  | `24,390,244`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (293%)        | `121`ns (295%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (293%)        | `121`ns (295%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (341%)        | `141`ns (344%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `461`ns (1,124%)      | `481`ns (1,173%)               | `2,169,197`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,162`ns (2,834%)    | `1,172`ns (2,859%)             | `860,585`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,775`ns (6,768%)    | `2,825`ns (6,890%)             | `360,360`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `190`ns (100%)        | `200`ns (105%)                 | `5,263,158`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `250`ns (132%)        | `251`ns (132%)                 | `4,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `291`ns (153%)        | `301`ns (158%)                 | `3,436,426`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
