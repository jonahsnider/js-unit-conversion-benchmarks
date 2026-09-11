# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 11 Sep 2026 18:19:40 GMT with Node.js v26.8.2 (V8 v14.6.202.34-node.28) on runnervmlun5p (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `49`ns (100%)         | `50`ns (102%)                  | `20,408,163`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `111`ns (227%)        | `120`ns (245%)                 | `9,009,009`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (245%)        | `130`ns (265%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `131`ns (267%)        | `140`ns (286%)                 | `7,633,588`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `220`ns (449%)        | `230`ns (469%)                 | `4,545,455`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `361`ns (737%)        | `380`ns (776%)                 | `2,770,083`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `471`ns (961%)        | `481`ns (982%)                 | `2,123,142`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `512`ns (1,045%)      | `531`ns (1,084%)               | `1,953,125`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,061`ns (2,165%)    | `1,102`ns (2,249%)             | `942,507`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,893`ns (3,863%)    | `1,924`ns (3,927%)             | `528,262`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `591`ns (100%)        | `671`ns (114%)                 | `1,692,047`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,663`ns (281%)      | `1,823`ns (308%)               | `601,323`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `24,367`ns (4,123%)   | `25,503`ns (4,315%)            | `41,039`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `60`ns (100%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `110`ns (183%)        | `111`ns (185%)                 | `9,090,909`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (200%)        | `130`ns (217%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `130`ns (217%)        | `140`ns (233%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `200`ns (333%)        | `210`ns (350%)                 | `5,000,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `490`ns (817%)        | `501`ns (835%)                 | `2,040,816`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,024`ns (3,373%)    | `2,063`ns (3,438%)             | `494,071`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `41`ns (100%)         | `50`ns (122%)                  | `24,390,244`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (293%)        | `121`ns (295%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (317%)        | `131`ns (320%)                 | `7,692,308`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `140`ns (341%)        | `141`ns (344%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `471`ns (1,149%)      | `510`ns (1,244%)               | `2,123,142`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,152`ns (2,810%)    | `1,162`ns (2,834%)             | `868,056`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,735`ns (6,671%)    | `2,775`ns (6,768%)             | `365,631`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `200`ns (100%)        | `210`ns (105%)                 | `5,000,000`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `250`ns (125%)        | `251`ns (125%)                 | `4,000,000`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `291`ns (146%)        | `301`ns (151%)                 | `3,436,426`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
