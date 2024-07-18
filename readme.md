# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 18 Jul 2024 19:32:03 GMT with Node.js v18.20.4 (V8 v10.2.154.26-node.37) on fv-az1780-522 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `110`ns (100%)        | `130`ns (118%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `310`ns (282%)        | `351`ns (319%)                 | `3,225,806`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (410%)        | `521`ns (474%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `521`ns (474%)        | `601`ns (546%)                 | `1,919,386`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,082`ns (984%)      | `1,173`ns (1,066%)             | `924,214`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,253`ns (1,139%)    | `1,443`ns (1,312%)             | `798,085`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,352`ns (1,229%)    | `1,502`ns (1,365%)             | `739,645`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,605`ns (2,368%)    | `2,827`ns (2,570%)             | `383,877`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,379`ns (3,981%)    | `4,799`ns (4,363%)             | `228,363`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `73,791`ns (67,083%)  | `74,815`ns (68,014%)           | `13,552`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `822`ns (100%)        | `1,122`ns (136%)               | `1,216,545`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `36,927`ns (4,492%)   | `52,735`ns (6,415%)            | `27,080`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `86,399`ns (10,511%)  | `161,919`ns (19,698%)          | `11,574`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `140`ns (100%)        | `151`ns (108%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (214%)        | `341`ns (244%)                 | `3,333,333`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `441`ns (315%)        | `501`ns (358%)                 | `2,267,574`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `512`ns (366%)        | `581`ns (415%)                 | `1,953,125`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,282`ns (916%)      | `1,452`ns (1,037%)             | `780,031`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,379`ns (3,128%)    | `4,863`ns (3,474%)             | `228,363`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,791`ns (26,994%)  | `38,495`ns (27,496%)           | `26,461`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `140`ns (117%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (251%)        | `361`ns (301%)                 | `3,322,259`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `440`ns (367%)        | `511`ns (426%)                 | `2,272,727`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,273`ns (1,061%)    | `1,453`ns (1,211%)             | `785,546`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,693`ns (1,411%)    | `2,065`ns (1,721%)             | `590,667`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,363`ns (5,303%)    | `7,287`ns (6,073%)             | `157,159`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `81,407`ns (67,839%)  | `82,367`ns (68,639%)           | `12,284`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `461`ns (100%)        | `511`ns (111%)                 | `2,169,197`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `511`ns (111%)        | `542`ns (118%)                 | `1,956,947`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `582`ns (126%)        | `642`ns (139%)                 | `1,718,213`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `221`ns (100%)        | `250`ns (113%)                 | `4,524,887`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `541`ns (245%)        | `601`ns (272%)                 | `1,848,429`/sec       |

<!-- endblock(results) -->
