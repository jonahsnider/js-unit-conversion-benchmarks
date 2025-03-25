# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 25 Mar 2025 22:33:10 GMT with Node.js v22.14.0 (V8 v12.4.254.21-node.22) on fv-az1344-449 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `110`ns (220%)        | `110`ns (220%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (240%)        | `140`ns (280%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (240%)        | `121`ns (242%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `251`ns (502%)        | `261`ns (522%)                 | `3,984,064`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `411`ns (822%)        | `421`ns (842%)                 | `2,433,090`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `431`ns (862%)        | `441`ns (882%)                 | `2,320,186`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `541`ns (1,082%)      | `561`ns (1,122%)               | `1,848,429`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,052`ns (2,104%)    | `1,091`ns (2,182%)             | `950,570`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,994`ns (3,988%)    | `2,023`ns (4,046%)             | `501,505`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `591`ns (100%)        | `681`ns (115%)                 | `1,692,047`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,212`ns (205%)      | `1,373`ns (232%)               | `825,083`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `26,495`ns (4,483%)   | `28,415`ns (4,808%)            | `37,743`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `70`ns (117%)                  | `16,666,667`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `100`ns (167%)        | `110`ns (183%)                 | `10,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (200%)        | `130`ns (217%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `130`ns (217%)        | `131`ns (218%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `241`ns (402%)        | `250`ns (417%)                 | `4,149,378`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `481`ns (802%)        | `481`ns (802%)                 | `2,079,002`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,095`ns (3,492%)    | `2,125`ns (3,542%)             | `477,327`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `120`ns (240%)        | `121`ns (242%)                 | `8,333,333`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `120`ns (240%)        | `130`ns (260%)                 | `8,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (240%)        | `130`ns (260%)                 | `8,333,333`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `501`ns (1,002%)      | `531`ns (1,062%)               | `1,996,008`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,102`ns (2,204%)    | `1,112`ns (2,224%)             | `907,441`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,955`ns (5,910%)    | `2,985`ns (5,970%)             | `338,409`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `190`ns (100%)        | `191`ns (101%)                 | `5,263,158`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `231`ns (122%)        | `240`ns (126%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `280`ns (147%)        | `281`ns (148%)                 | `3,571,429`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `100`ns (200%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
