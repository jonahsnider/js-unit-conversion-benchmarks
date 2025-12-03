# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 03 Dec 2025 10:56:48 GMT with Node.js v24.11.1 (V8 v13.6.233.10-node.28) on runnervmoqczp (Linux-x64 Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `65`ns (100%)         | `67`ns (103%)                  | `15,384,615`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `116`ns (178%)        | `118`ns (182%)                 | `8,620,690`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `116`ns (178%)        | `118`ns (182%)                 | `8,620,690`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `154`ns (237%)        | `157`ns (242%)                 | `6,493,506`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `214`ns (329%)        | `224`ns (345%)                 | `4,672,897`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `342`ns (526%)        | `349`ns (537%)                 | `2,923,977`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `523`ns (805%)        | `542`ns (834%)                 | `1,912,046`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `637`ns (980%)        | `652`ns (1,003%)               | `1,569,859`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,267`ns (1,949%)    | `1,358`ns (2,089%)             | `789,266`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,865`ns (2,869%)    | `1,899`ns (2,922%)             | `536,193`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `404`ns (100%)        | `421`ns (104%)                 | `2,475,248`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,437`ns (356%)      | `1,537`ns (380%)               | `695,894`/sec         |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `23,871`ns (5,909%)   | `24,543`ns (6,075%)            | `41,892`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `62`ns (100%)         | `63`ns (102%)                  | `16,129,032`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `145`ns (234%)        | `149`ns (240%)                 | `6,896,552`/sec       |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `146`ns (235%)        | `150`ns (242%)                 | `6,849,315`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `159`ns (256%)        | `166`ns (268%)                 | `6,289,308`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `204`ns (329%)        | `210`ns (339%)                 | `4,901,961`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `608`ns (981%)        | `623`ns (1,005%)               | `1,644,737`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,956`ns (3,155%)    | `2,004`ns (3,232%)             | `511,247`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `64`ns (100%)         | `66`ns (103%)                  | `15,625,000`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `114`ns (178%)        | `116`ns (181%)                 | `8,771,930`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `139`ns (217%)        | `156`ns (244%)                 | `7,194,245`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)                | `163`ns (255%)        | `168`ns (263%)                 | `6,134,969`/sec       |
| [uom](https://npmjs.com/package/uom) (fast)                        | `530`ns (828%)        | `605`ns (945%)                 | `1,886,792`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,556`ns (2,431%)    | `1,591`ns (2,486%)             | `642,674`/sec         |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `2,511`ns (3,923%)    | `2,623`ns (4,098%)             | `398,248`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `216`ns (100%)        | `220`ns (102%)                 | `4,629,630`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `240`ns (111%)        | `242`ns (112%)                 | `4,166,667`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `294`ns (136%)        | `297`ns (138%)                 | `3,401,361`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `41`ns (100%)         | `43`ns (105%)                  | `24,390,244`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `100`ns (244%)        | `121`ns (295%)                 | `10,000,000`/sec      |

<!-- endblock(results) -->
