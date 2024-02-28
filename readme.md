# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 28 Feb 2024 04:26:46 GMT with Node.js v18.19.1 (V8 v10.2.154.26-node.28) on fv-az1247-153 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `140`ns (108%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `351`ns (270%)        | `391`ns (301%)                 | `2,849,003`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `471`ns (362%)        | `541`ns (416%)                 | `2,123,142`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `571`ns (439%)        | `642`ns (494%)                 | `1,751,313`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,122`ns (863%)      | `1,222`ns (940%)               | `891,266`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,293`ns (995%)      | `1,523`ns (1,172%)             | `773,395`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,403`ns (1,079%)    | `1,573`ns (1,210%)             | `712,758`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,685`ns (2,065%)    | `2,925`ns (2,250%)             | `372,439`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,499`ns (3,461%)    | `5,059`ns (3,892%)             | `222,272`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,639`ns (55,876%)  | `73,727`ns (56,713%)           | `13,767`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `852`ns (100%)        | `1,182`ns (139%)               | `1,173,709`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `35,071`ns (4,116%)   | `52,415`ns (6,152%)            | `28,514`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `84,287`ns (9,893%)   | `155,519`ns (18,253%)          | `11,864`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `140`ns (108%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (232%)        | `331`ns (255%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `421`ns (324%)        | `471`ns (362%)                 | `2,375,297`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `571`ns (439%)        | `611`ns (470%)                 | `1,751,313`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,272`ns (978%)      | `1,382`ns (1,063%)             | `786,164`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,539`ns (3,492%)    | `4,779`ns (3,676%)             | `220,313`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,895`ns (28,381%)  | `37,631`ns (28,947%)           | `27,104`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `150`ns (125%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `311`ns (259%)        | `381`ns (318%)                 | `3,215,434`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `390`ns (325%)        | `500`ns (417%)                 | `2,564,103`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,252`ns (1,043%)    | `1,483`ns (1,236%)             | `798,722`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,543`ns (1,286%)    | `1,993`ns (1,661%)             | `648,088`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,295`ns (5,246%)    | `7,427`ns (6,189%)             | `158,856`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `78,335`ns (65,279%)  | `80,255`ns (66,879%)           | `12,766`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `491`ns (100%)        | `561`ns (114%)                 | `2,036,660`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `521`ns (106%)        | `581`ns (118%)                 | `1,919,386`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `601`ns (122%)        | `681`ns (139%)                 | `1,663,894`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `211`ns (100%)        | `240`ns (114%)                 | `4,739,336`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `531`ns (252%)        | `601`ns (285%)                 | `1,883,239`/sec       |

<!-- endblock(results) -->
