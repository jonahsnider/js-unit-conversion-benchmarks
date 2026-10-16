# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 16 Oct 2026 15:24:21 GMT with Node.js v26.12.0 (V8 v14.6.202.34-node.39) on runnervm8k3b6 (Linux-x64 AMD EPYC 9V45 96-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `30`ns (100%)         | `40`ns (133%)                  | `33,333,333`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `70`ns (233%)         | `70`ns (233%)                  | `14,285,714`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80`ns (267%)         | `80`ns (267%)                  | `12,500,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `90`ns (300%)         | `90`ns (300%)                  | `11,111,111`/sec      |
| [uom](https://npmjs.com/package/uom) (fast)                        | `151`ns (503%)        | `160`ns (533%)                 | `6,622,517`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `211`ns (703%)        | `220`ns (733%)                 | `4,739,336`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `261`ns (870%)        | `270`ns (900%)                 | `3,831,418`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `300`ns (1,000%)      | `311`ns (1,037%)               | `3,333,333`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `611`ns (2,037%)      | `671`ns (2,237%)               | `1,636,661`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,061`ns (3,537%)    | `1,072`ns (3,573%)             | `942,507`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `190`ns (100%)        | `200`ns (105%)                 | `5,263,158`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `651`ns (343%)        | `731`ns (385%)                 | `1,536,098`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `10,639`ns (5,599%)   | `10,863`ns (5,717%)            | `93,994`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `40`ns (100%)         | `40`ns (100%)                  | `25,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `70`ns (175%)         | `80`ns (200%)                  | `14,285,714`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `80`ns (200%)         | `80`ns (200%)                  | `12,500,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `80`ns (200%)         | `80`ns (200%)                  | `12,500,000`/sec      |
| [uom](https://npmjs.com/package/uom) (fast)                        | `131`ns (328%)        | `150`ns (375%)                 | `7,633,588`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `300`ns (750%)        | `310`ns (775%)                 | `3,333,333`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,132`ns (2,830%)    | `1,152`ns (2,880%)             | `883,392`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `30`ns (100%)         | `40`ns (133%)                  | `33,333,333`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `70`ns (233%)         | `80`ns (267%)                  | `14,285,714`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `81`ns (270%)         | `90`ns (300%)                  | `12,345,679`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `90`ns (300%)         | `100`ns (333%)                 | `11,111,111`/sec      |
| [uom](https://npmjs.com/package/uom) (fast)                        | `281`ns (937%)        | `360`ns (1,200%)               | `3,558,719`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `651`ns (2,170%)      | `661`ns (2,203%)               | `1,536,098`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,602`ns (5,340%)    | `1,613`ns (5,377%)             | `624,220`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `120`ns (100%)        | `120`ns (100%)                 | `8,333,333`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `140`ns (117%)        | `150`ns (125%)                 | `7,142,857`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `171`ns (143%)        | `180`ns (150%)                 | `5,847,953`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `30`ns (100%)         | `40`ns (133%)                  | `33,333,333`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `51`ns (170%)         | `60`ns (200%)                  | `19,607,843`/sec      |

<!-- endblock(results) -->
