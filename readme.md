# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 06 Jul 2024 01:44:00 GMT with Node.js v18.20.3 (V8 v10.2.154.26-node.37) on fv-az1110-442 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `140`ns (117%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `311`ns (259%)        | `381`ns (318%)                 | `3,215,434`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `461`ns (384%)        | `531`ns (443%)                 | `2,169,197`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `591`ns (493%)        | `742`ns (618%)                 | `1,692,047`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,113`ns (928%)      | `1,273`ns (1,061%)             | `898,473`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,323`ns (1,103%)    | `1,773`ns (1,478%)             | `755,858`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,352`ns (1,127%)    | `1,774`ns (1,478%)             | `739,645`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,655`ns (2,213%)    | `3,057`ns (2,548%)             | `376,648`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,519`ns (3,766%)    | `5,871`ns (4,893%)             | `221,288`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `73,023`ns (60,853%)  | `75,135`ns (62,613%)           | `13,694`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `852`ns (100%)        | `1,142`ns (134%)               | `1,173,709`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `36,991`ns (4,342%)   | `53,087`ns (6,231%)            | `27,034`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `85,055`ns (9,983%)   | `158,847`ns (18,644%)          | `11,757`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `150`ns (100%)        | `160`ns (107%)                 | `6,666,667`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (201%)        | `340`ns (227%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `421`ns (281%)        | `471`ns (314%)                 | `2,375,297`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `511`ns (341%)        | `561`ns (374%)                 | `1,956,947`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,253`ns (835%)      | `1,352`ns (901%)               | `798,085`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,359`ns (2,906%)    | `4,539`ns (3,026%)             | `229,410`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,023`ns (24,682%)  | `37,855`ns (25,237%)           | `27,010`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `141`ns (118%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `320`ns (267%)        | `361`ns (301%)                 | `3,125,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `450`ns (375%)        | `511`ns (426%)                 | `2,222,222`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,333`ns (1,111%)    | `1,453`ns (1,211%)             | `750,188`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,553`ns (1,294%)    | `1,763`ns (1,469%)             | `643,915`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,275`ns (5,229%)    | `6,883`ns (5,736%)             | `159,363`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80,383`ns (66,986%)  | `81,535`ns (67,946%)           | `12,440`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `471`ns (100%)        | `530`ns (113%)                 | `2,123,142`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `521`ns (111%)        | `561`ns (119%)                 | `1,919,386`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `592`ns (126%)        | `662`ns (141%)                 | `1,689,189`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `230`ns (100%)        | `241`ns (105%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `541`ns (235%)        | `591`ns (257%)                 | `1,848,429`/sec       |

<!-- endblock(results) -->
