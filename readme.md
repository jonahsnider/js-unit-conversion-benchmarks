# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 30 Mar 2024 10:55:20 GMT with Node.js v18.19.1 (V8 v10.2.154.26-node.28) on fv-az1456-93 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `121`ns (100%)        | `140`ns (116%)                 | `8,264,463`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (249%)        | `330`ns (273%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `421`ns (348%)        | `491`ns (406%)                 | `2,375,297`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `571`ns (472%)        | `651`ns (538%)                 | `1,751,313`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,062`ns (878%)      | `1,152`ns (952%)               | `941,620`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,282`ns (1,060%)    | `1,432`ns (1,183%)             | `780,031`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,322`ns (1,093%)    | `1,443`ns (1,193%)             | `756,430`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,685`ns (2,219%)    | `2,865`ns (2,368%)             | `372,439`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,531`ns (3,745%)    | `4,831`ns (3,993%)             | `220,702`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `71,935`ns (59,450%)  | `72,895`ns (60,244%)           | `13,901`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `872`ns (100%)        | `1,163`ns (133%)               | `1,146,789`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `36,255`ns (4,158%)   | `52,031`ns (5,967%)            | `27,582`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `83,775`ns (9,607%)   | `155,519`ns (17,835%)          | `11,937`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `140`ns (100%)        | `150`ns (107%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `320`ns (229%)        | `351`ns (251%)                 | `3,125,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `441`ns (315%)        | `501`ns (358%)                 | `2,267,574`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `551`ns (394%)        | `592`ns (423%)                 | `1,814,882`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,222`ns (873%)      | `1,342`ns (959%)               | `818,331`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,639`ns (3,314%)    | `4,899`ns (3,499%)             | `215,564`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,479`ns (26,056%)  | `37,311`ns (26,651%)           | `27,413`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `140`ns (117%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `340`ns (283%)        | `401`ns (334%)                 | `2,941,176`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `511`ns (426%)        | `621`ns (518%)                 | `1,956,947`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,363`ns (1,136%)    | `1,612`ns (1,343%)             | `733,676`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,703`ns (1,419%)    | `2,365`ns (1,971%)             | `587,199`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,515`ns (5,429%)    | `8,231`ns (6,859%)             | `153,492`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `79,423`ns (66,186%)  | `81,087`ns (67,573%)           | `12,591`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `471`ns (100%)        | `531`ns (113%)                 | `2,123,142`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `521`ns (111%)        | `571`ns (121%)                 | `1,919,386`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `601`ns (128%)        | `671`ns (142%)                 | `1,663,894`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `220`ns (100%)        | `240`ns (109%)                 | `4,545,455`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `521`ns (237%)        | `571`ns (260%)                 | `1,919,386`/sec       |

<!-- endblock(results) -->
