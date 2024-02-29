# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 29 Feb 2024 22:39:30 GMT with Node.js v18.19.1 (V8 v10.2.154.26-node.28) on fv-az985-937 (Linux-x64 AMD EPYC 7763 64-Core Processor)

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
| [convert](https://npmjs.com/package/convert) (fast)                | `330`ns (300%)        | `381`ns (346%)                 | `3,030,303`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `511`ns (465%)        | `581`ns (528%)                 | `1,956,947`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `572`ns (520%)        | `741`ns (674%)                 | `1,748,252`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,132`ns (1,029%)    | `1,293`ns (1,175%)             | `883,392`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,373`ns (1,248%)    | `1,873`ns (1,703%)             | `728,332`/sec         |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,402`ns (1,275%)    | `1,813`ns (1,648%)             | `713,267`/sec         |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,665`ns (2,423%)    | `3,117`ns (2,834%)             | `375,235`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,631`ns (4,210%)    | `6,003`ns (5,457%)             | `215,936`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `71,935`ns (65,395%)  | `73,727`ns (67,025%)           | `13,901`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `872`ns (100%)        | `1,172`ns (134%)               | `1,146,789`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `35,103`ns (4,026%)   | `51,903`ns (5,952%)            | `28,488`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `83,519`ns (9,578%)   | `154,623`ns (17,732%)          | `11,973`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `130`ns (100%)        | `150`ns (115%)                 | `7,692,308`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `280`ns (215%)        | `320`ns (246%)                 | `3,571,429`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `420`ns (323%)        | `471`ns (362%)                 | `2,380,952`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `552`ns (425%)        | `601`ns (462%)                 | `1,811,594`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,292`ns (994%)      | `1,392`ns (1,071%)             | `773,994`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,419`ns (3,399%)    | `4,659`ns (3,584%)             | `226,296`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `36,383`ns (27,987%)  | `36,895`ns (28,381%)           | `27,485`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `120`ns (100%)        | `140`ns (117%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `320`ns (267%)        | `361`ns (301%)                 | `3,125,000`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `451`ns (376%)        | `521`ns (434%)                 | `2,217,295`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,362`ns (1,135%)    | `1,473`ns (1,228%)             | `734,214`/sec         |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,603`ns (1,336%)    | `1,824`ns (1,520%)             | `623,830`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,463`ns (5,386%)    | `6,955`ns (5,796%)             | `154,727`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `79,679`ns (66,399%)  | `80,383`ns (66,986%)           | `12,550`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `471`ns (100%)        | `541`ns (115%)                 | `2,123,142`/sec       |
| [ms](https://npmjs.com/package/ms) (popular)              | `511`ns (108%)        | `562`ns (119%)                 | `1,956,947`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `591`ns (125%)        | `662`ns (141%)                 | `1,692,047`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `210`ns (100%)        | `230`ns (110%)                 | `4,761,905`/sec       |
| [convert](https://npmjs.com/package/convert) (fast) | `511`ns (243%)        | `571`ns (272%)                 | `1,956,947`/sec       |

<!-- endblock(results) -->
