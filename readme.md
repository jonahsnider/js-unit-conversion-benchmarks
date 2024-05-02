# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 02 May 2024 01:32:12 GMT with Node.js v18.20.2 (V8 v10.2.154.26-node.36) on fv-az1249-165 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `340`ns (262%)        | `371`ns (285%)                 | `2,941,176`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `511`ns (393%)        | `551`ns (424%)                 | `1,956,947`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `611`ns (470%)        | `701`ns (539%)                 | `1,636,661`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,172`ns (902%)      | `1,252`ns (963%)               | `853,242`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,402`ns (1,078%)    | `1,553`ns (1,195%)             | `713,267`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,452`ns (1,117%)    | `1,553`ns (1,195%)             | `688,705`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,737`ns (2,105%)    | `2,927`ns (2,252%)             | `365,364`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,659`ns (3,584%)    | `4,971`ns (3,824%)             | `214,638`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `72,639`ns (55,876%)  | `73,151`ns (56,270%)           | `13,767`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `841`ns (100%)        | `1,112`ns (132%)               | `1,189,061`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `35,711`ns (4,246%)   | `51,935`ns (6,175%)            | `28,003`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `84,479`ns (10,045%)  | `156,543`ns (18,614%)          | `11,837`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `140`ns (100%)        | `160`ns (114%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `310`ns (221%)        | `361`ns (258%)                 | `3,225,806`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `460`ns (329%)        | `581`ns (415%)                 | `2,173,913`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `551`ns (394%)        | `721`ns (515%)                 | `1,814,882`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,383`ns (988%)      | `1,844`ns (1,317%)             | `723,066`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,699`ns (3,356%)    | `5,683`ns (4,059%)             | `212,811`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,735`ns (26,239%)  | `38,207`ns (27,291%)           | `27,222`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `131`ns (100%)        | `160`ns (122%)                 | `7,633,588`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (230%)        | `340`ns (260%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `481`ns (367%)        | `532`ns (406%)                 | `2,079,002`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,353`ns (1,033%)    | `1,443`ns (1,102%)             | `739,098`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,814`ns (1,385%)    | `1,964`ns (1,499%)             | `551,268`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,555`ns (5,004%)    | `6,875`ns (5,248%)             | `152,555`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `79,743`ns (60,873%)  | `80,447`ns (61,410%)           | `12,540`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `491`ns (100%)        | `551`ns (112%)                 | `2,036,660`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `511`ns (104%)        | `561`ns (114%)                 | `1,956,947`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `611`ns (124%)        | `681`ns (139%)                 | `1,636,661`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `230`ns (100%)        | `250`ns (109%)                 | `4,347,826`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `531`ns (231%)        | `591`ns (257%)                 | `1,883,239`/sec       |

<!-- endblock(results) -->
