# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 09 Oct 2025 21:53:23 GMT with Node.js v22.20.0 (V8 v12.4.254.21-node.33) on runnervmwhb2z (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `131`ns (262%)        | `140`ns (280%)                 | `7,633,588`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (280%)        | `150`ns (300%)                 | `7,142,857`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `140`ns (280%)        | `141`ns (282%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `241`ns (482%)        | `260`ns (520%)                 | `4,149,378`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `381`ns (762%)        | `391`ns (782%)                 | `2,624,672`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `461`ns (922%)        | `471`ns (942%)                 | `2,169,197`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `541`ns (1,082%)      | `561`ns (1,122%)               | `1,848,429`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,062`ns (2,124%)    | `1,092`ns (2,184%)             | `941,620`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,974`ns (3,948%)    | `2,004`ns (4,008%)             | `506,586`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `521`ns (100%)        | `621`ns (119%)                 | `1,919,386`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,774`ns (340%)      | `1,973`ns (379%)               | `563,698`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `26,495`ns (5,085%)   | `28,447`ns (5,460%)            | `37,743`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `61`ns (102%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (200%)        | `121`ns (202%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (217%)        | `131`ns (218%)                 | `7,692,308`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (233%)        | `150`ns (250%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `241`ns (402%)        | `251`ns (418%)                 | `4,149,378`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `461`ns (768%)        | `461`ns (768%)                 | `2,169,197`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,145`ns (3,575%)    | `2,175`ns (3,625%)             | `466,200`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (240%)        | `130`ns (260%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (240%)        | `120`ns (240%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (280%)        | `140`ns (280%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `491`ns (982%)        | `521`ns (1,042%)               | `2,036,660`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,122`ns (2,244%)    | `1,142`ns (2,284%)             | `891,266`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,875`ns (5,750%)    | `2,907`ns (5,814%)             | `347,826`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `211`ns (100%)        | `220`ns (104%)                 | `4,739,336`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `240`ns (114%)        | `241`ns (114%)                 | `4,166,667`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `281`ns (133%)        | `290`ns (137%)                 | `3,558,719`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
