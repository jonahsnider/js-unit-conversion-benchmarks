# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 29 May 2024 23:04:37 GMT with Node.js v18.20.3 (V8 v10.2.154.26-node.37) on fv-az1052-879 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `130`ns (108%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `370`ns (308%)        | `421`ns (351%)                 | `2,702,703`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `481`ns (401%)        | `541`ns (451%)                 | `2,079,002`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `611`ns (509%)        | `762`ns (635%)                 | `1,636,661`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,162`ns (968%)      | `1,302`ns (1,085%)             | `860,585`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,443`ns (1,203%)    | `1,853`ns (1,544%)             | `693,001`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,463`ns (1,219%)    | `1,823`ns (1,519%)             | `683,527`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,785`ns (2,321%)    | `3,077`ns (2,564%)             | `359,066`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,591`ns (3,826%)    | `5,823`ns (4,853%)             | `217,817`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,831`ns (60,692%)  | `74,495`ns (62,079%)           | `13,730`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `892`ns (100%)        | `1,172`ns (131%)               | `1,121,076`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `35,199`ns (3,946%)   | `51,839`ns (5,812%)            | `28,410`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `85,631`ns (9,600%)   | `157,183`ns (17,621%)          | `11,678`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `140`ns (108%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `311`ns (239%)        | `350`ns (269%)                 | `3,215,434`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `450`ns (346%)        | `501`ns (385%)                 | `2,222,222`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `521`ns (401%)        | `571`ns (439%)                 | `1,919,386`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,302`ns (1,002%)    | `1,413`ns (1,087%)             | `768,049`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,359`ns (3,353%)    | `4,571`ns (3,516%)             | `229,410`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,119`ns (28,553%)  | `37,791`ns (29,070%)           | `26,940`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `130`ns (108%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `330`ns (275%)        | `370`ns (308%)                 | `3,030,303`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `441`ns (368%)        | `492`ns (410%)                 | `2,267,574`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,332`ns (1,110%)    | `1,433`ns (1,194%)             | `750,751`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,613`ns (1,344%)    | `1,753`ns (1,461%)             | `619,963`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,423`ns (5,353%)    | `6,843`ns (5,703%)             | `155,690`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `81,023`ns (67,519%)  | `81,855`ns (68,213%)           | `12,342`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `491`ns (100%)        | `551`ns (112%)                 | `2,036,660`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `531`ns (108%)        | `581`ns (118%)                 | `1,883,239`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `611`ns (124%)        | `681`ns (139%)                 | `1,636,661`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `221`ns (100%)        | `251`ns (114%)                 | `4,524,887`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `541`ns (245%)        | `601`ns (272%)                 | `1,848,429`/sec       |

<!-- endblock(results) -->
