# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 30 Aug 2026 03:50:23 GMT with Node.js v26.8.1 (V8 v14.6.202.34-node.28) on runnervmgx7h7 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `111`ns (271%)        | `120`ns (293%)                 | `9,009,009`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (293%)        | `130`ns (317%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `121`ns (295%)        | `130`ns (317%)                 | `8,264,463`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `191`ns (466%)        | `200`ns (488%)                 | `5,235,602`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `341`ns (832%)        | `351`ns (856%)                 | `2,932,551`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `461`ns (1,124%)      | `471`ns (1,149%)               | `2,169,197`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `511`ns (1,246%)      | `521`ns (1,271%)               | `1,956,947`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,011`ns (2,466%)    | `1,022`ns (2,493%)             | `989,120`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,813`ns (4,422%)    | `1,834`ns (4,473%)             | `551,572`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `692`ns (100%)        | `751`ns (109%)                 | `1,445,087`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,583`ns (229%)      | `1,723`ns (249%)               | `631,712`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `24,543`ns (3,547%)   | `25,487`ns (3,683%)            | `40,745`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `61`ns (100%)         | `70`ns (115%)                  | `16,393,443`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (180%)        | `120`ns (197%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `121`ns (198%)        | `131`ns (215%)                 | `8,264,463`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (213%)        | `131`ns (215%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `210`ns (344%)        | `220`ns (361%)                 | `4,761,905`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `472`ns (774%)        | `491`ns (805%)                 | `2,118,644`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,963`ns (3,218%)    | `1,994`ns (3,269%)             | `509,424`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `41`ns (100%)         | `50`ns (122%)                  | `24,390,244`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `111`ns (271%)        | `120`ns (293%)                 | `9,009,009`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (317%)        | `130`ns (317%)                 | `7,692,308`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `141`ns (344%)        | `150`ns (366%)                 | `7,092,199`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `461`ns (1,124%)      | `500`ns (1,220%)               | `2,169,197`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,172`ns (2,859%)    | `1,182`ns (2,883%)             | `853,242`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,765`ns (6,744%)    | `2,807`ns (6,846%)             | `361,664`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `191`ns (100%)        | `201`ns (105%)                 | `5,235,602`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `240`ns (126%)        | `241`ns (126%)                 | `4,166,667`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `281`ns (147%)        | `290`ns (152%)                 | `3,558,719`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `110`ns (220%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
