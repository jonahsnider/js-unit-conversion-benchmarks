# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 06 Apr 2024 04:34:12 GMT with Node.js v18.20.0 (V8 v10.2.154.26-node.36) on fv-az525-371 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `111`ns (100%)        | `130`ns (117%)                 | `9,009,009`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `321`ns (289%)        | `371`ns (334%)                 | `3,115,265`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `401`ns (361%)        | `461`ns (415%)                 | `2,493,766`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `570`ns (514%)        | `621`ns (559%)                 | `1,754,386`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,032`ns (930%)      | `1,142`ns (1,029%)             | `968,992`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,162`ns (1,047%)    | `1,292`ns (1,164%)             | `860,585`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,333`ns (1,201%)    | `1,452`ns (1,308%)             | `750,188`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,575`ns (2,320%)    | `2,735`ns (2,464%)             | `388,350`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,419`ns (3,981%)    | `4,659`ns (4,197%)             | `226,296`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `74,047`ns (66,709%)  | `75,455`ns (67,977%)           | `13,505`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `901`ns (100%)        | `1,153`ns (128%)               | `1,109,878`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `35,071`ns (3,892%)   | `52,799`ns (5,860%)            | `28,514`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `86,847`ns (9,639%)   | `164,223`ns (18,227%)          | `11,515`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `150`ns (115%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (231%)        | `360`ns (277%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `430`ns (331%)        | `501`ns (385%)                 | `2,325,581`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `541`ns (416%)        | `641`ns (493%)                 | `1,848,429`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,322`ns (1,017%)    | `1,753`ns (1,348%)             | `756,430`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,519`ns (3,476%)    | `5,431`ns (4,178%)             | `221,288`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `38,367`ns (29,513%)  | `39,551`ns (30,424%)           | `26,064`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `140`ns (117%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `351`ns (293%)        | `420`ns (350%)                 | `2,849,003`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `431`ns (359%)        | `511`ns (426%)                 | `2,320,186`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,363`ns (1,136%)    | `1,533`ns (1,278%)             | `733,676`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,623`ns (1,353%)    | `1,983`ns (1,652%)             | `616,143`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,723`ns (5,603%)    | `7,555`ns (6,296%)             | `148,743`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `83,263`ns (69,386%)  | `84,351`ns (70,293%)           | `12,010`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `481`ns (100%)        | `531`ns (110%)                 | `2,079,002`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `521`ns (108%)        | `571`ns (119%)                 | `1,919,386`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `601`ns (125%)        | `661`ns (137%)                 | `1,663,894`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `221`ns (100%)        | `250`ns (113%)                 | `4,524,887`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `561`ns (254%)        | `621`ns (281%)                 | `1,782,531`/sec       |

<!-- endblock(results) -->
