# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 20 Aug 2024 19:54:54 GMT with Node.js v20.16.0 (V8 v11.3.244.8-node.23) on fv-az2022-875 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `110`ns (220%)        | `120`ns (240%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (260%)        | `140`ns (280%)                 | `7,692,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `250`ns (500%)        | `260`ns (520%)                 | `4,000,000`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `491`ns (982%)        | `501`ns (1,002%)               | `2,036,660`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `521`ns (1,042%)      | `531`ns (1,062%)               | `1,919,386`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `592`ns (1,184%)      | `611`ns (1,222%)               | `1,689,189`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,092`ns (2,184%)    | `1,122`ns (2,244%)             | `915,751`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,165`ns (4,330%)    | `2,205`ns (4,410%)             | `461,894`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `34,975`ns (69,950%)  | `35,135`ns (70,270%)           | `28,592`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `722`ns (100%)        | `772`ns (107%)                 | `1,385,042`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `28,543`ns (3,953%)   | `29,471`ns (4,082%)            | `35,035`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `75,839`ns (10,504%)  | `76,287`ns (10,566%)           | `13,186`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `60`ns (100%)         | `70`ns (117%)                  | `16,666,667`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `150`ns (250%)        | `160`ns (267%)                 | `6,666,667`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `160`ns (267%)        | `161`ns (268%)                 | `6,250,000`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `211`ns (352%)        | `221`ns (368%)                 | `4,739,336`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `461`ns (768%)        | `471`ns (785%)                 | `2,169,197`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,143`ns (3,572%)    | `2,155`ns (3,592%)             | `466,636`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `17,679`ns (29,465%)  | `17,727`ns (29,545%)           | `56,564`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `110`ns (220%)        | `111`ns (222%)                 | `9,090,909`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `140`ns (280%)        | `150`ns (300%)                 | `7,142,857`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `521`ns (1,042%)      | `541`ns (1,082%)               | `1,919,386`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,232`ns (2,464%)    | `1,243`ns (2,486%)             | `811,688`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,095`ns (6,190%)    | `3,127`ns (6,254%)             | `323,102`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `37,983`ns (75,966%)  | `38,143`ns (76,286%)           | `26,328`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `201`ns (100%)        | `210`ns (104%)                 | `4,975,124`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `231`ns (115%)        | `240`ns (119%)                 | `4,329,004`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `300`ns (149%)        | `301`ns (150%)                 | `3,333,333`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `110`ns (220%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
