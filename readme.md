# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 05 Apr 2024 00:38:46 GMT with Node.js v18.19.1 (V8 v10.2.154.26-node.28) on fv-az693-648 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `131`ns (109%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `340`ns (283%)        | `390`ns (325%)                 | `2,941,176`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `431`ns (359%)        | `521`ns (434%)                 | `2,320,186`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `641`ns (534%)        | `802`ns (668%)                 | `1,560,062`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,132`ns (943%)      | `1,322`ns (1,102%)             | `883,392`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,332`ns (1,110%)    | `1,844`ns (1,537%)             | `750,751`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,413`ns (1,178%)    | `1,853`ns (1,544%)             | `707,714`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,805`ns (2,338%)    | `3,297`ns (2,748%)             | `356,506`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,711`ns (3,926%)    | `5,911`ns (4,926%)             | `212,269`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `71,615`ns (59,679%)  | `73,343`ns (61,119%)           | `13,964`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `872`ns (100%)        | `1,213`ns (139%)               | `1,146,789`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `36,255`ns (4,158%)   | `51,999`ns (5,963%)            | `27,582`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `83,775`ns (9,607%)   | `155,775`ns (17,864%)          | `11,937`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `140`ns (100%)        | `160`ns (114%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `271`ns (194%)        | `310`ns (221%)                 | `3,690,037`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `421`ns (301%)        | `461`ns (329%)                 | `2,375,297`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `510`ns (364%)        | `541`ns (386%)                 | `1,960,784`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,233`ns (881%)      | `1,313`ns (938%)               | `811,030`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,411`ns (3,151%)    | `4,611`ns (3,294%)             | `226,706`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,447`ns (26,034%)  | `37,183`ns (26,559%)           | `27,437`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `121`ns (100%)        | `140`ns (116%)                 | `8,264,463`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `341`ns (282%)        | `381`ns (315%)                 | `2,932,551`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `481`ns (398%)        | `561`ns (464%)                 | `2,079,002`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,353`ns (1,118%)    | `1,483`ns (1,226%)             | `739,098`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,633`ns (1,350%)    | `1,854`ns (1,532%)             | `612,370`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,535`ns (5,401%)    | `7,083`ns (5,854%)             | `153,022`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `79,487`ns (65,692%)  | `80,447`ns (66,485%)           | `12,581`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `481`ns (100%)        | `541`ns (112%)                 | `2,079,002`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `521`ns (108%)        | `581`ns (121%)                 | `1,919,386`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `590`ns (123%)        | `662`ns (138%)                 | `1,694,915`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `211`ns (100%)        | `230`ns (109%)                 | `4,739,336`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `511`ns (242%)        | `562`ns (266%)                 | `1,956,947`/sec       |

<!-- endblock(results) -->
