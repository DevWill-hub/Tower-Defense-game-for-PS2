export default class Debug {
    constructor() {
        this.font = new Font("default");
        this.font.color = Color.new(5, 5, 5);
        this.font.scale = 0.7f;

        this.ram_usage = System.getMemoryStats();
        this.free_mem;
        this.free_vram;
        this.ramUse = (this.ram_usage.used / 1048576).toFixed(2);
    }

    print() {
        this.free_mem = System.getMemoryStats()
        this.free_vram = Screen.getFreeVRAM();

        this.font.print(0, 50, `Using Ram ${this.ramUse}MB/32MB`);
        this.font.print(0, 100, `Free RAM: ${(32 - this.ramUse).toFixed(2)}MB/32MB`);
        this.font.print(0, 150, `Used Ram: ${this.ram_usage.used} B`);
        this.font.print(0, 200, `Free VRAM: ${this.free_vram} KB`);
    }
}