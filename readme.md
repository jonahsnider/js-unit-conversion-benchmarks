# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 16 Sep 2026 22:17:47 GMT with Node.js v26.9.0 (V8 v14.6.202.34-node.32) on runnervmlun5p (Linux-x64 Intel(R) Xeon(R) 6973P-C)

Each test was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
Information about the execution times are shown below.
Lower execution times and higher executions per second are better.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 24 hours to minutes

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `37`ns (100%)         | `39`ns (105%)                  | `27,027,027`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `75`ns (203%)         | `77`ns (208%)                  | `13,333,333`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `92`ns (249%)         | `97`ns (262%)                  | `10,869,565`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `98`ns (265%)         | `111`ns (300%)                 | `10,204,082`/sec      |
| [uom](https://npmjs.com/package/uom) (fast)                        | `126`ns (341%)        | `151`ns (408%)                 | `7,936,508`/sec       |
| [moment](https://npmjs.com/package/moment) (popular)               | `224`ns (605%)        | `230`ns (622%)                 | `4,464,286`/sec       |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `300`ns (811%)        | `322`ns (870%)                 | `3,333,333`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `327`ns (884%)        | `338`ns (914%)                 | `3,058,104`/sec       |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `686`ns (1,854%)      | `706`ns (1,908%)               | `1,457,726`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,127`ns (3,046%)    | `1,160`ns (3,135%)             | `887,311`/sec         |

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `218`ns (100%)        | `234`ns (107%)                 | `4,587,156`/sec       |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `717`ns (329%)        | `794`ns (364%)                 | `1,394,700`/sec       |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `12,767`ns (5,856%)   | `12,943`ns (5,937%)            | `78,327`/sec          |

### Convert 4 inches to millimeters

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `36`ns (100%)         | `37`ns (103%)                  | `27,777,778`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `86`ns (239%)         | `90`ns (250%)                  | `11,627,907`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `87`ns (242%)         | `90`ns (250%)                  | `11,494,253`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `89`ns (247%)         | `108`ns (300%)                 | `11,235,955`/sec      |
| [uom](https://npmjs.com/package/uom) (fast)                        | `118`ns (328%)        | `127`ns (353%)                 | `8,474,576`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `327`ns (908%)        | `336`ns (933%)                 | `3,058,104`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,149`ns (3,192%)    | `1,183`ns (3,286%)             | `870,322`/sec         |

### Convert 2.5 liters to cubic inches

| Library                                                            | Median execution time | 75th percentile execution time | Executions per second |
| ------------------------------------------------------------------ | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                                    | `35`ns (100%)         | `36`ns (103%)                  | `28,571,429`/sec      |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `81`ns (231%)         | `86`ns (246%)                  | `12,345,679`/sec      |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `85`ns (243%)         | `89`ns (254%)                  | `11,764,706`/sec      |
| [convert](https://npmjs.com/package/convert) (fast)                | `89`ns (254%)         | `111`ns (317%)                 | `11,235,955`/sec      |
| [uom](https://npmjs.com/package/uom) (fast)                        | `344`ns (983%)        | `361`ns (1,031%)               | `2,906,977`/sec       |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `827`ns (2,363%)      | `849`ns (2,426%)               | `1,209,190`/sec       |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `1,613`ns (4,609%)    | `1,665`ns (4,757%)             | `619,963`/sec         |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `115`ns (100%)        | `118`ns (103%)                 | `8,695,652`/sec       |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `132`ns (115%)        | `137`ns (119%)                 | `7,575,758`/sec       |
| [convert](https://npmjs.com/package/convert) (fast)       | `168`ns (146%)        | `179`ns (156%)                 | `5,952,381`/sec       |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Median execution time | 75th percentile execution time | Executions per second |
| --------------------------------------------------- | --------------------- | ------------------------------ | --------------------- |
| math (baseline)                                     | `35`ns (100%)         | `37`ns (106%)                  | `28,571,429`/sec      |
| [convert](https://npmjs.com/package/convert) (fast) | `62`ns (177%)         | `64`ns (183%)                  | `16,129,032`/sec      |

<!-- endblock(results) -->
