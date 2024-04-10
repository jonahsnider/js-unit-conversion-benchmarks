# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 10 Apr 2024 04:52:15 GMT with Node.js v18.20.1 (V8 v10.2.154.26-node.36) on fv-az1205-284 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `341`ns (284%)        | `400`ns (333%)                 | `2,932,551`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `481`ns (401%)        | `571`ns (476%)                 | `2,079,002`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `571`ns (476%)        | `661`ns (551%)                 | `1,751,313`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,082`ns (902%)      | `1,193`ns (994%)               | `924,214`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,292`ns (1,077%)    | `1,483`ns (1,236%)             | `773,994`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,453`ns (1,211%)    | `1,633`ns (1,361%)             | `688,231`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,665`ns (2,221%)    | `2,887`ns (2,406%)             | `375,235`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,551`ns (3,792%)    | `4,991`ns (4,159%)             | `219,732`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `73,407`ns (61,173%)  | `74,431`ns (62,026%)           | `13,623`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `982`ns (100%)        | `1,223`ns (125%)               | `1,018,330`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `32,927`ns (3,353%)   | `41,983`ns (4,275%)            | `30,370`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `84,991`ns (8,655%)   | `89,599`ns (9,124%)            | `11,766`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `140`ns (117%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `320`ns (267%)        | `361`ns (301%)                 | `3,125,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `441`ns (368%)        | `511`ns (426%)                 | `2,267,574`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `561`ns (468%)        | `621`ns (518%)                 | `1,782,531`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,383`ns (1,153%)    | `1,543`ns (1,286%)             | `723,066`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,699`ns (3,916%)    | `5,011`ns (4,176%)             | `212,811`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,247`ns (31,039%)  | `38,015`ns (31,679%)           | `26,848`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `150`ns (100%)        | `170`ns (113%)                 | `6,666,667`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `340`ns (227%)        | `391`ns (261%)                 | `2,941,176`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `531`ns (354%)        | `621`ns (414%)                 | `1,883,239`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,412`ns (941%)      | `1,594`ns (1,063%)             | `708,215`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,763`ns (1,175%)    | `2,195`ns (1,463%)             | `567,215`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,783`ns (4,522%)    | `7,815`ns (5,210%)             | `147,427`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `81,215`ns (54,143%)  | `82,303`ns (54,869%)           | `12,313`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `491`ns (100%)        | `552`ns (112%)                 | `2,036,660`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `521`ns (106%)        | `581`ns (118%)                 | `1,919,386`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `602`ns (123%)        | `682`ns (139%)                 | `1,661,130`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `220`ns (100%)        | `231`ns (105%)                 | `4,545,455`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `511`ns (232%)        | `551`ns (250%)                 | `1,956,947`/sec       |

<!-- endblock(results) -->
