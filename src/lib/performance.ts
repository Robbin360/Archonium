export interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

export class SovereignPerformance {
  private metrics: PerformanceMetrics = {
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
  };
  
  public initializeTracking(): void {
    if (typeof window === 'undefined') return;
    
    // Largest Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.lcp = lastEntry.startTime;
      this.reportMetric('LCP', lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });
    
    // First Input Delay
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry: any) => {
        this.metrics.fid = entry.processingStart - entry.startTime;
        this.reportMetric('FID', this.metrics.fid);
      });
    }).observe({ entryTypes: ['first-input'] });
    
    // Cumulative Layout Shift
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries() as any[];
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          this.metrics.cls = clsValue;
          this.reportMetric('CLS', clsValue);
        }
      });
    }).observe({ type: 'layout-shift', buffered: true });
    
    // Time to First Byte
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry: any) => {
        this.metrics.ttfb = entry.responseStart - entry.requestStart;
        this.reportMetric('TTFB', this.metrics.ttfb);
      });
    }).observe({ type: 'navigation', buffered: true });
  }
  
  private reportMetric(name: string, value: number): void {
    console.log(`[ARCHONIUM PERFORMANCE] ${name}:`, value);
    
    // Sovereignty performance standards
    const standards = {
      LCP: 2500, // < 2.5s
      FID: 100,  // < 100ms
      CLS: 0.1,  // < 0.1
      TTFB: 600, // < 600ms
    } as const;
    
    const standard = (standards as any)[name];
    if (standard !== undefined && value > standard) {
      console.warn(`[SOVEREIGNTY ALERT] ${name} exceeds sovereign standards:`, {
        value,
        standard,
        status: 'REQUIRES_OPTIMIZATION'
      });
    }
  }
  
  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }
  
  public validateSovereignPerformance(): boolean {
    const { lcp, fid, cls, ttfb } = this.metrics;
    
    return (
      (lcp === null || lcp < 2500) &&
      (fid === null || fid < 100) &&
      (cls === null || cls < 0.1) &&
      (ttfb === null || ttfb < 600)
    );
  }
}
