# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 23 Jul 2024 05:22:59 GMT with Node.js v18.20.4 (V8 v10.2.154.26-node.37) on fv-az1789-161 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `141`ns (108%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `321`ns (247%)        | `351`ns (270%)                 | `3,115,265`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `441`ns (339%)        | `511`ns (393%)                 | `2,267,574`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `601`ns (462%)        | `661`ns (508%)                 | `1,663,894`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,142`ns (878%)      | `1,213`ns (933%)               | `875,657`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,373`ns (1,056%)    | `1,473`ns (1,133%)             | `728,332`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,392`ns (1,071%)    | `1,513`ns (1,164%)             | `718,391`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,697`ns (2,075%)    | `2,855`ns (2,196%)             | `370,782`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,539`ns (3,492%)    | `4,839`ns (3,722%)             | `220,313`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `74,559`ns (57,353%)  | `75,199`ns (57,845%)           | `13,412`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `852`ns (100%)        | `1,012`ns (119%)               | `1,173,709`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `30,591`ns (3,590%)   | `38,015`ns (4,462%)            | `32,689`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `86,399`ns (10,141%)  | `87,359`ns (10,253%)           | `11,574`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `131`ns (100%)        | `150`ns (115%)                 | `7,633,588`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (229%)        | `331`ns (253%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `441`ns (337%)        | `491`ns (375%)                 | `2,267,574`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `531`ns (405%)        | `591`ns (451%)                 | `1,883,239`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,272`ns (971%)      | `1,382`ns (1,055%)             | `786,164`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,351`ns (3,321%)    | `4,651`ns (3,550%)             | `229,832`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `38,079`ns (29,068%)  | `38,815`ns (29,630%)           | `26,261`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `151`ns (116%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `350`ns (269%)        | `381`ns (293%)                 | `2,857,143`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (347%)        | `511`ns (393%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,413`ns (1,087%)    | `1,552`ns (1,194%)             | `707,714`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,734`ns (1,334%)    | `2,023`ns (1,556%)             | `576,701`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,735`ns (5,181%)    | `7,447`ns (5,728%)             | `148,478`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `82,431`ns (63,408%)  | `83,135`ns (63,950%)           | `12,131`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `481`ns (100%)        | `551`ns (115%)                 | `2,079,002`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `521`ns (108%)        | `571`ns (119%)                 | `1,919,386`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `622`ns (129%)        | `702`ns (146%)                 | `1,607,717`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `221`ns (100%)        | `240`ns (109%)                 | `4,524,887`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `512`ns (232%)        | `562`ns (254%)                 | `1,953,125`/sec       |

<!-- endblock(results) -->
