# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 18 Jun 2024 04:33:11 GMT with Node.js v18.20.3 (V8 v10.2.154.26-node.37) on fv-az695-955 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `310`ns (256%)        | `371`ns (307%)                 | `3,225,806`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `411`ns (340%)        | `501`ns (414%)                 | `2,433,090`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `582`ns (481%)        | `711`ns (588%)                 | `1,718,213`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,152`ns (952%)      | `1,293`ns (1,069%)             | `868,056`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,382`ns (1,142%)    | `1,623`ns (1,341%)             | `723,589`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,422`ns (1,175%)    | `1,714`ns (1,417%)             | `703,235`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,695`ns (2,227%)    | `3,025`ns (2,500%)             | `371,058`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,439`ns (3,669%)    | `5,239`ns (4,330%)             | `225,276`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,703`ns (60,085%)  | `73,855`ns (61,037%)           | `13,755`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `771`ns (100%)        | `1,082`ns (140%)               | `1,297,017`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `36,607`ns (4,748%)   | `51,807`ns (6,719%)            | `27,317`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `85,375`ns (11,073%)  | `157,311`ns (20,404%)          | `11,713`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `150`ns (100%)        | `161`ns (107%)                 | `6,666,667`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `311`ns (207%)        | `361`ns (241%)                 | `3,215,434`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `461`ns (307%)        | `530`ns (353%)                 | `2,169,197`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `500`ns (333%)        | `571`ns (381%)                 | `2,000,000`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,263`ns (842%)      | `1,432`ns (955%)               | `791,766`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,411`ns (2,941%)    | `4,799`ns (3,199%)             | `226,706`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,087`ns (24,725%)  | `37,983`ns (25,322%)           | `26,964`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `141`ns (108%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `341`ns (262%)        | `381`ns (293%)                 | `2,932,551`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `481`ns (370%)        | `541`ns (416%)                 | `2,079,002`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,313`ns (1,010%)    | `1,432`ns (1,102%)             | `761,615`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,804`ns (1,388%)    | `2,013`ns (1,548%)             | `554,324`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,483`ns (4,987%)    | `6,975`ns (5,365%)             | `154,250`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80,895`ns (62,227%)  | `81,855`ns (62,965%)           | `12,362`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `471`ns (100%)        | `521`ns (111%)                 | `2,123,142`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `511`ns (108%)        | `552`ns (117%)                 | `1,956,947`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `611`ns (130%)        | `671`ns (142%)                 | `1,636,661`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `221`ns (100%)        | `240`ns (109%)                 | `4,524,887`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `551`ns (249%)        | `601`ns (272%)                 | `1,814,882`/sec       |

<!-- endblock(results) -->
