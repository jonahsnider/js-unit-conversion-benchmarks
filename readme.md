# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 01 Nov 2024 05:32:20 GMT with Node.js v20.18.0 (V8 v11.3.244.8-node.23) on fv-az693-317 (Linux-x64 AMD EPYC 7763 64-Core Processor)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `51`ns (102%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `141`ns (282%)        | `160`ns (320%)                 | `7,092,199`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `150`ns (300%)        | `160`ns (320%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `201`ns (402%)        | `211`ns (422%)                 | `4,975,124`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `490`ns (980%)        | `501`ns (1,002%)               | `2,040,816`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `491`ns (982%)        | `501`ns (1,002%)               | `2,036,660`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `591`ns (1,182%)      | `611`ns (1,222%)               | `1,692,047`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,142`ns (2,284%)    | `1,163`ns (2,326%)             | `875,657`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,215`ns (4,430%)    | `2,255`ns (4,510%)             | `451,467`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `34,495`ns (68,990%)  | `34,655`ns (69,310%)           | `28,990`/sec          |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `682`ns (100%)        | `742`ns (109%)                 | `1,466,276`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `28,767`ns (4,218%)   | `29,679`ns (4,352%)            | `34,762`/sec          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `75,647`ns (11,092%)  | `76,095`ns (11,158%)           | `13,219`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `130`ns (260%)        | `140`ns (280%)                 | `7,692,308`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `150`ns (300%)        | `151`ns (302%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `220`ns (440%)        | `221`ns (442%)                 | `4,545,455`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `481`ns (962%)        | `491`ns (982%)                 | `2,079,002`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,215`ns (4,430%)    | `2,235`ns (4,470%)             | `451,467`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `17,631`ns (35,262%)  | `17,679`ns (35,358%)           | `56,718`/sec          |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `120`ns (240%)        | `130`ns (260%)                 | `8,333,333`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `150`ns (300%)        | `160`ns (320%)                 | `6,666,667`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `541`ns (1,082%)      | `551`ns (1,102%)               | `1,848,429`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,192`ns (2,384%)    | `1,212`ns (2,424%)             | `838,926`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,045`ns (6,090%)    | `3,075`ns (6,150%)             | `328,407`/sec         |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `38,079`ns (76,158%)  | `38,207`ns (76,414%)           | `26,261`/sec          |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `201`ns (100%)        | `210`ns (104%)                 | `4,975,124`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `241`ns (120%)        | `250`ns (124%)                 | `4,149,378`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `271`ns (135%)        | `280`ns (139%)                 | `3,690,037`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `50`ns (100%)         | `50`ns (100%)                  | `20,000,000`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (200%)        | `101`ns (202%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
