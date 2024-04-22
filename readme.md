# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 22 Apr 2024 16:17:39 GMT with Node.js v18.20.2 (V8 v10.2.154.26-node.36) on fv-az714-977 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `341`ns (282%)        | `391`ns (323%)                 | `2,932,551`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `541`ns (447%)        | `591`ns (488%)                 | `1,848,429`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `581`ns (480%)        | `691`ns (571%)                 | `1,721,170`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,112`ns (919%)      | `1,253`ns (1,036%)             | `899,281`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,343`ns (1,110%)    | `1,553`ns (1,283%)             | `744,602`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,353`ns (1,118%)    | `1,623`ns (1,341%)             | `739,098`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,625`ns (2,169%)    | `2,925`ns (2,417%)             | `380,952`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,479`ns (3,702%)    | `5,079`ns (4,198%)             | `223,264`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,447`ns (59,874%)  | `73,407`ns (60,667%)           | `13,803`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `852`ns (100%)        | `1,132`ns (133%)               | `1,173,709`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `34,431`ns (4,041%)   | `51,167`ns (6,006%)            | `29,044`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `84,479`ns (9,915%)   | `126,975`ns (14,903%)          | `11,837`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `150`ns (115%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `310`ns (238%)        | `351`ns (270%)                 | `3,225,806`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (347%)        | `511`ns (393%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `531`ns (408%)        | `601`ns (462%)                 | `1,883,239`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,282`ns (986%)      | `1,433`ns (1,102%)             | `780,031`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,311`ns (3,316%)    | `4,619`ns (3,553%)             | `231,965`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,799`ns (28,307%)  | `37,599`ns (28,922%)           | `27,175`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `121`ns (100%)        | `140`ns (116%)                 | `8,264,463`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `351`ns (290%)        | `391`ns (323%)                 | `2,849,003`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `481`ns (398%)        | `541`ns (447%)                 | `2,079,002`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,393`ns (1,151%)    | `1,503`ns (1,242%)             | `717,875`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,794`ns (1,483%)    | `2,004`ns (1,656%)             | `557,414`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,423`ns (5,308%)    | `6,963`ns (5,755%)             | `155,690`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80,703`ns (66,697%)  | `81,535`ns (67,384%)           | `12,391`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `491`ns (100%)        | `550`ns (112%)                 | `2,036,660`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `521`ns (106%)        | `581`ns (118%)                 | `1,919,386`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `621`ns (126%)        | `691`ns (141%)                 | `1,610,306`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `220`ns (100%)        | `231`ns (105%)                 | `4,545,455`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `541`ns (246%)        | `592`ns (269%)                 | `1,848,429`/sec       |

<!-- endblock(results) -->
