# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 02 Sep 2026 05:24:36 GMT with Node.js v26.8.1 (V8 v14.6.202.34-node.28) on runnervmgx7h7 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `110`ns (268%)        | `111`ns (271%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `111`ns (271%)        | `120`ns (293%)                 | `9,009,009`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (293%)        | `121`ns (295%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `210`ns (512%)        | `211`ns (515%)                 | `4,761,905`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `371`ns (905%)        | `381`ns (929%)                 | `2,695,418`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `461`ns (1,124%)      | `471`ns (1,149%)               | `2,169,197`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `511`ns (1,246%)      | `521`ns (1,271%)               | `1,956,947`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,032`ns (2,517%)    | `1,073`ns (2,617%)             | `968,992`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,843`ns (4,495%)    | `1,864`ns (4,546%)             | `542,594`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `631`ns (100%)        | `681`ns (108%)                 | `1,584,786`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,593`ns (252%)      | `1,723`ns (273%)               | `627,746`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `24,367`ns (3,862%)   | `25,311`ns (4,011%)            | `41,039`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `70`ns (117%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (183%)        | `120`ns (200%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (200%)        | `120`ns (200%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (217%)        | `140`ns (233%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `200`ns (333%)        | `210`ns (350%)                 | `5,000,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `472`ns (787%)        | `491`ns (818%)                 | `2,118,644`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,994`ns (3,323%)    | `2,023`ns (3,372%)             | `501,505`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `41`ns (100%)         | `50`ns (122%)                  | `24,390,244`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (293%)        | `121`ns (295%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (317%)        | `131`ns (320%)                 | `7,692,308`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (341%)        | `141`ns (344%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `461`ns (1,124%)      | `501`ns (1,222%)               | `2,169,197`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,152`ns (2,810%)    | `1,162`ns (2,834%)             | `868,056`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,765`ns (6,744%)    | `2,807`ns (6,846%)             | `361,664`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `200`ns (100%)        | `201`ns (100%)                 | `5,000,000`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `231`ns (116%)        | `240`ns (120%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `280`ns (140%)        | `281`ns (141%)                 | `3,571,429`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `70`ns (140%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `181`ns (362%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
